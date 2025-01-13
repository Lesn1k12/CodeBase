package org.example.directory.dto;

import org.example.file.dto.ResponseFileDTO;

import java.util.List;

public record ResponseDirectoryDTO(Long id, String title, List<ResponseFileDTO> files){}