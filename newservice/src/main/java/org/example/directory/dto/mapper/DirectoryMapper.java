package org.example.directory.dto.mapper;

import org.example.directory.domain.Directory;
import org.example.directory.dto.RequestDirectoryDTO;
import org.example.directory.dto.ResponseDirectoryDTO;
import org.example.file.dto.mapper.FileMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;


import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = FileMapper.class)
public interface DirectoryMapper {

    @Mapping(target = "repository.id", source = "repositoryId")
    Directory toEntity(RequestDirectoryDTO directoryDTO);

    List<Directory> toEntities(List<RequestDirectoryDTO> directoryDTOS);

    List<ResponseDirectoryDTO> toDTOs(List<Directory> directories);

    ResponseDirectoryDTO toDTO(Directory directory);

}
