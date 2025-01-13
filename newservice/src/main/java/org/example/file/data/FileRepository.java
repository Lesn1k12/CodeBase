package org.example.file.data;

import org.example.file.domain.File;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FileRepository extends JpaRepository<File, Long> {
    @Modifying
    @Query("UPDATE File file SET file.content = :content, file.title = :title WHERE file.id = :id")
    Integer updateContentById(@Param("id") Long id, @Param("content") String content, @Param("title") String title);
}
