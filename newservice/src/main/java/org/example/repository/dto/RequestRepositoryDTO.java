package org.example.repository.dto;

import org.example.directory.dto.RequestDirectoryDTO;

import java.util.List;

public record RequestRepositoryDTO(String title, String description, List<RequestDirectoryDTO> directories) {
}
