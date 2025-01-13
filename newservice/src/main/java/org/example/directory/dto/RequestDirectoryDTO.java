package org.example.directory.dto;

import org.example.file.dto.RequestFileDTO;

import java.util.List;

public record RequestDirectoryDTO(Long repositoryId, String title, List<RequestFileDTO> files){}