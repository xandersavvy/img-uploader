package com.souvik.imageuploader;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@Data
@Document("imagePathStore")
public class ImageModel {
    @Id
    private String id;

    @Indexed(unique = true)
    private String image;
}
