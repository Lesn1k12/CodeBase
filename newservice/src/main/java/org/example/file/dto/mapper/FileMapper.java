package org.example.file.dto.mapper;

import org.example.file.domain.File;
import org.example.file.dto.RequestFileDTO;
import org.example.file.dto.ResponseFileDTO;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface FileMapper {

    @Mapping(target = "directory.id", source = "directoryId")
    File toEntity(RequestFileDTO fileDTO);

    ResponseFileDTO toDTO(File file);

    List<ResponseFileDTO> toDTOs(List<File> files);
}