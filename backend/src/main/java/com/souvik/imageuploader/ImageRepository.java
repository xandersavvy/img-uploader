package com.souvik.imageuploader;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface ImageRepository extends MongoRepository<ImageModel,Long> {
    @Query("{name:'?0'}")
     ImageModel findImageById(String id);

//    public Optional<ImageModel> findByUserId(Long userId);
}
