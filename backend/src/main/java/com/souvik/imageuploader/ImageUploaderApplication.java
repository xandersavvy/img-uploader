package com.souvik.imageuploader;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@SpringBootApplication
@RestController
@CrossOrigin("*")
public class ImageUploaderApplication {

	public static void main(String[] args) {
		SpringApplication.run(ImageUploaderApplication.class, args);
	}

	@GetMapping("/")
	public String helloWorld(@RequestParam("name") String name){
		return  "hello World, " + name;
	}
	@GetMapping("/images/{id}")
	public String getImagePath(@PathVariable long id){
		
	}
}
