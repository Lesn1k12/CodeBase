package org.example.file.controller;

import lombok.RequiredArgsConstructor;
import org.example.file.dto.RequestFileDTO;
import org.example.file.dto.ResponseFileDTO;
import org.example.file.dto.forUpdate.ToUpdateFileDTO;
import org.example.file.service.FileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/file")
@RequiredArgsConstructor
public class FileController {
    private final FileService fileService;

    @PostMapping
    public ResponseEntity<ResponseFileDTO> create(@RequestBody RequestFileDTO fileDTO) {
        return ResponseEntity.ok(fileService.create(fileDTO));
    }

    @PutMapping
    public void update(@RequestBody ToUpdateFileDTO dto) {
        fileService.update(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) {
        fileService.delete(id);
    }
}
