package org.example.directory.controller;

import lombok.RequiredArgsConstructor;
import org.example.directory.dto.RequestDirectoryDTO;
import org.example.directory.dto.ResponseDirectoryDTO;
import org.example.directory.dto.forUpdate.ToUpdateDirectoryDTO;
import org.example.directory.service.DirectoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/directory")
@RequiredArgsConstructor
public class DirectoryController {
    private final DirectoryService directoryService;

    @PostMapping
    public ResponseEntity<ResponseDirectoryDTO> create(@RequestBody RequestDirectoryDTO directoryDTO) {
        return ResponseEntity.ok(directoryService.create(directoryDTO));
    }

    @PutMapping
    public void update(@RequestBody ToUpdateDirectoryDTO dto) {
        directoryService.update(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        directoryService.delete(id);
    }

}
