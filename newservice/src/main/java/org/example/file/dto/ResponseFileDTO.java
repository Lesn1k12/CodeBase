package org.example.file.dto;

import java.time.LocalDate;


public record ResponseFileDTO(Long id, String title, String content, LocalDate creationDate) {
}
