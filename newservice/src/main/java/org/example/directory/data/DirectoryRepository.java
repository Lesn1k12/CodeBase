package org.example.directory.data;

import org.example.directory.domain.Directory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface DirectoryRepository extends JpaRepository<Directory, Long> {
    @Modifying
    @Query("UPDATE Directory directory SET directory.title = :title WHERE directory.id = :id")
    Integer updateTitleById(@Param("id") Long id, @Param("title") String title);
}