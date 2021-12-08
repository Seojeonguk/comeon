package com.ssafy.db.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.DynamicInsert;

/**
 * 유저 모델 정의.
 */
@Entity
@Getter
@Setter
@ToString
@DynamicInsert
public class User extends BaseEntity {
    String position;
    String department;
    String name;
    String userId;
    
    int userScore;
    String userTier;
    
//    @ManyToMany
//    @JoinTable(name="conference")
//    private List<Conference> confereces = new ArrayList<>();

    @ToString.Exclude
    @JsonIgnore
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    String password;
}
