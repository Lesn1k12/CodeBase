package org.example.file.service;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.example.file.data.FileRepository;
import org.example.file.domain.File;
import org.example.file.dto.RequestFileDTO;
import org.example.file.dto.ResponseFileDTO;
import org.example.file.dto.forUpdate.ToUpdateFileDTO;
import org.example.file.dto.mapper.FileMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class FileService {
    private final FileRepository fileRepository;
    private final FileMapper fileMapper;

    @Transactional
    public ResponseFileDTO create(RequestFileDTO fileDTO) {
       return fileMapper.toDTO(fileRepository.save(fileMapper.toEntity(fileDTO)));
    }

    @Transactional
    public void update(ToUpdateFileDTO dto) {
        Integer updatedRows = fileRepository.updateContentById(
                dto.id(),
                dto.content(),
                dto.title());

        if (updatedRows > 0) {
            System.out.println("Success!");
        } else {
            System.out.println("Failed!");
        }
    }

    @Transactional
    public void delete(Long id) {
        fileRepository.deleteById(id);
    }
}
