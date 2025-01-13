package org.example.repository.dto;

import org.example.directory.dto.ResponseDirectoryDTO;

import java.time.LocalDate;
import java.util.List;

public record ResponseRepositoryDTO(Long id,
                                    String title,
                                    String description,
                                    LocalDate creationDate,
                                    List<ResponseDirectoryDTO> directories)
{}
