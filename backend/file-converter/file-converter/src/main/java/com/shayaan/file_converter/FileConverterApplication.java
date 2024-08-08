package com.shayaan.file_converter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class FileConverterApplication {

    public static void main(String[] args) {
        SpringApplication.run(FileConverterApplication.class, args);
    }

}
