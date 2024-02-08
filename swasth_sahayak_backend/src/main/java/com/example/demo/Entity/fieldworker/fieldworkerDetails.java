package com.example.demo.Entity.fieldworker;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
@Entity
public class fieldworkerDetails {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int fieldworker_id;

    @Column(nullable = false)
    private String name;

    private int mobile_no;

    @Column(nullable = false)
    private Date dob;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private String Address;

    @Column(nullable = false)
    private int pinecode;

    @Column(nullable = false)
    private int blockcode;
}
