package org.example.repository.controller;

import lombok.RequiredArgsConstructor;

import org.example.repository.dto.RequestRepositoryDTO;
import org.example.repository.dto.ResponseRepositoryDTO;
import org.example.repository.service.RepositoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/repository")
@RequiredArgsConstructor
public class RepositoryController {
    private final RepositoryService repositoryService;

    @PostMapping
    public ResponseEntity<ResponseRepositoryDTO> create(@RequestBody RequestRepositoryDTO requestRepositoryDTO) {
        return ResponseEntity.ok(repositoryService.create(requestRepositoryDTO));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseRepositoryDTO> read(@PathVariable("id") Long id) {
        return ResponseEntity.ok(repositoryService.read(id));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        repositoryService.delete(id);
    }
}
