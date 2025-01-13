package org.example.directory.service;

import lombok.RequiredArgsConstructor;
import org.example.directory.data.DirectoryRepository;
import org.example.directory.dto.RequestDirectoryDTO;
import org.example.directory.dto.ResponseDirectoryDTO;
import org.example.directory.dto.forUpdate.ToUpdateDirectoryDTO;
import org.example.directory.dto.mapper.DirectoryMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class DirectoryService {
    private final DirectoryRepository directoryRepository;
    private final DirectoryMapper directoryMapper;

    @Transactional
    public ResponseDirectoryDTO create(RequestDirectoryDTO directoryDTO) {
        return directoryMapper.toDTO(directoryRepository.save(directoryMapper.toEntity(directoryDTO)));
    }

    @Transactional
    public void update(ToUpdateDirectoryDTO dto) {
        Integer updatedRows = directoryRepository.updateTitleById(
                dto.id(),
                dto.title());

        if (updatedRows > 0) {
            System.out.println("Success!");
        }else{
            System.out.println("Failed!");
        }
    }

    @Transactional
    public void delete(Long id) {
        directoryRepository.deleteById(id);
    }
}
