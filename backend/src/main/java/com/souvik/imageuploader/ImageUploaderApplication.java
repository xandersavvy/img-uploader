package com.souvik.imageuploader;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Blob;
import java.util.List;


@SpringBootApplication
@RestController
@CrossOrigin
@RequiredArgsConstructor
public class ImageUploaderApplication {

	@Autowired
	private final ImageService imageService;
	public static void main(String[] args) {
		SpringApplication.run(ImageUploaderApplication.class, args);
	}

	@GetMapping("/")
	public String helloWorld(@RequestParam("name") String name){
		return  "hello World, " + name;
	}
	@GetMapping("/images/{id}")
	public ImageModel getImage(@PathVariable String id){
			return imageService.getImageById(id);
	}
	@GetMapping("/images")
	public List<ImageModel> getAllImage(){
		try {
			return imageService.GetAllImagePath();
		}
		catch (Exception ex){
			System.err.println(ex);
			throw  new RuntimeException(ex);
		}
	}
	@PostMapping("/")
	@ExceptionHandler(IOException.class)
	public ResponseEntity<Boolean> storeImage(@RequestBody MultipartFile image) throws IOException {
		try {
			String path = "../images";
			Files.write(Paths.get(path+File.separator+image.getOriginalFilename()),image.getBytes());
			imageService.StoreImage(image.getOriginalFilename());
			return new ResponseEntity<>(true, HttpStatus.OK);
		}catch (Exception ex){
			System.err.println(ex);
			return new ResponseEntity<>(false, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
