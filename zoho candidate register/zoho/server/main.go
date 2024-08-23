package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/lib/pq"
)

type Candidate struct {
	Email  string `json:"email"`
	FName  string `json:"fName"`
	Phone  string `json:"phone"`
	LName  string `json:"lName"`
	Office string `json:"office"`
	Aadhar string `json:"aadhar"`
	Pan    string `json:"pan"`
}

func main() {
	router := gin.Default()

	// Add CORS middleware
	router.Use(cors.New(cors.Config{
		AllowOrigins: []string{"http://localhost:3000"}, // Update with you
		// r frontend URL
		AllowMethods:     []string{"POST"},
		AllowHeaders:     []string{"Content-Type"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
	}))

	// Set trusted proxies
	router.SetTrustedProxies([]string{"127.0.0.1"})

	connStr := "user=postgres dbname=zoho sslmode=disable password=Teceze@123"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

	router.POST("/submit", func(c *gin.Context) {
		var candidate Candidate
		if err := c.ShouldBindJSON(&candidate); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		query := `
			INSERT INTO candidates (email, f_name, phone, l_name, office, aadhar, pan)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
		`
		_, err := db.Exec(query, candidate.Email, candidate.FName, candidate.Phone, candidate.LName, candidate.Office, candidate.Aadhar, candidate.Pan)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "Data submitted successfully"})
	})

	router.Run(":8080")
}
