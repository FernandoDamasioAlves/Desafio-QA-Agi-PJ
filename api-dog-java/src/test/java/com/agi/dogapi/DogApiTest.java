package com.agi.dogapi;

import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.notNullValue;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;

public class DogApiTest {

    @BeforeAll
    public static void setup() {
       
        RestAssured.baseURI = "https://dog.ceo/api";
    }

    @Test
    public void testListAllBreeds() {
        given()
        .when()
            .get("/breeds/list/all")
        .then()
            .statusCode(200) 
            .body("status", equalTo("success"))
            .body("message", notNullValue()); 
    }

    @Test
    public void testGetBreedImages() {
        given()
        .when()
            .get("/breed/hound/images")
        .then()
            .statusCode(200)
            .body("status", equalTo("success"))
            .body("message", hasItem(containsString("http"))); 
    }

    @Test
    public void testGetRandomImage() {
        given()
        .when()
            .get("/breeds/image/random")
        .then()
            .statusCode(200)
            .body("status", equalTo("success"))
            .body("message", containsString("https://images.dog.ceo/")); 
    }
}