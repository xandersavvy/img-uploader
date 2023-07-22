package com.souvik.imageuploader;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
@RequiredArgsConstructor
@EnableMongoRepositories
public class ImageService {
    @Autowired
    private final ImageRepository imageRepository;

    public List<ImageModel> GetAllImagePath(){

        return  imageRepository.findAll();
    }

    public void StoreImage(String image) {
            ImageModel imageModel = new ImageModel();
            imageModel.setImage(image);
            imageRepository.save(imageModel);
    }
    public ImageModel getImageById(String id){
        return imageRepository.findImageById(id);
    }
}
