package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QConference is a Querydsl query type for Conference
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QConference extends EntityPathBase<Conference> {

    private static final long serialVersionUID = -625543586L;

    public static final QConference conference = new QConference("conference");

    public final QBaseEntity _super = new QBaseEntity(this);

    public final DateTimePath<java.util.Date> callEndDate = createDateTime("callEndDate", java.util.Date.class);

    public final DateTimePath<java.util.Date> callEndTime = createDateTime("callEndTime", java.util.Date.class);

    public final NumberPath<Integer> callSetTime = createNumber("callSetTime", Integer.class);

    public final DateTimePath<java.util.Date> callStartDate = createDateTime("callStartDate", java.util.Date.class);

    public final DateTimePath<java.util.Date> callStartTime = createDateTime("callStartTime", java.util.Date.class);

    public final NumberPath<Long> conferenceCategory = createNumber("conferenceCategory", Long.class);

    public final NumberPath<Integer> day = createNumber("day", Integer.class);

    public final StringPath description = createString("description");

    //inherited
    public final NumberPath<Long> id = _super.id;

    public final BooleanPath isActive = createBoolean("isActive");

    public final NumberPath<Integer> maxMember = createNumber("maxMember", Integer.class);

    public final NumberPath<Integer> nowMember = createNumber("nowMember", Integer.class);

    public final NumberPath<Long> ownerId = createNumber("ownerId", Long.class);

    public final StringPath thumbnailUrl = createString("thumbnailUrl");

    public final StringPath title = createString("title");

    public QConference(String variable) {
        super(Conference.class, forVariable(variable));
    }

    public QConference(Path<? extends Conference> path) {
        super(path.getType(), path.getMetadata());
    }

    public QConference(PathMetadata metadata) {
        super(Conference.class, metadata);
    }

}

