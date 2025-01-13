package org.example.directory.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.file.domain.File;
import org.example.repository.domain.Repository;
import java.util.List;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "directories")
public class Directory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @ManyToOne
    @JoinColumn(name = "repository_id", referencedColumnName = "id")
    private Repository repository;

    @OneToMany(mappedBy = "directory", cascade = CascadeType.ALL)
    private List<File> files;
}
