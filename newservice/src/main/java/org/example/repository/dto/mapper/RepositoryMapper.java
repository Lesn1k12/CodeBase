package org.example.repository.dto.mapper;

import org.example.directory.dto.mapper.DirectoryMapper;
import org.example.file.domain.File;
import org.example.repository.domain.Repository;
import org.example.repository.dto.RequestRepositoryDTO;
import org.example.repository.dto.ResponseRepositoryDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = DirectoryMapper.class)
public interface RepositoryMapper {
    Repository toEntity(RequestRepositoryDTO repositoryDTO);

    ResponseRepositoryDTO toDTO(Repository repository);
}
