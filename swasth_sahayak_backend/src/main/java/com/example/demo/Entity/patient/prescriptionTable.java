package com.example.demo.Entity.patient;

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
@Table(name="prescription_Table")
public class prescriptionTable {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private int prescription_id;

    //foreign key
    @Column(nullable = false)
    private int pid;

    @Column(nullable = false)
    private Date prescription_date;

    @Column(nullable = false,length = 5000)
    private String prescription;


    @Column(nullable = false,length = 1000)
    private String doctor_comment;


    @Column(nullable = false)
    private String disease_name;


    @Column(nullable = false)
    private int questionnaire_id;

    @Column(nullable = false)
    private int doctor_id;


    @Column(nullable = false)
    private int diagnosis_id;


}
