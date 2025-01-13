package org.example.repository.service;

import lombok.RequiredArgsConstructor;
import org.example.repository.data.RepositoryRepository;
import org.example.repository.dto.RequestRepositoryDTO;
import org.example.repository.dto.ResponseRepositoryDTO;
import org.example.repository.dto.mapper.RepositoryMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class RepositoryService {
    private final RepositoryRepository repositoryRepository;
    private final RepositoryMapper repositoryMapper;

    @Transactional
    public ResponseRepositoryDTO create(RequestRepositoryDTO repositoryDTO) {
        return repositoryMapper.toDTO(repositoryRepository.save(repositoryMapper.toEntity(repositoryDTO)));
    }

    @Transactional
    public ResponseRepositoryDTO read(Long id) {
        return repositoryMapper.toDTO(repositoryRepository.findById(id).orElse(null));
    }

    @Transactional
    public void delete(Long id) {
        repositoryRepository.deleteById(id);
    }
}
