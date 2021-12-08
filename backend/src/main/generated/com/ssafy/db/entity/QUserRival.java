package com.ssafy.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QUserRival is a Querydsl query type for UserRival
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QUserRival extends EntityPathBase<UserRival> {

    private static final long serialVersionUID = 699196157L;

    public static final QUserRival userRival = new QUserRival("userRival");

    public final QBaseEntity _super = new QBaseEntity(this);

    //inherited
    public final NumberPath<Long> id = _super.id;

    public final BooleanPath isActive = createBoolean("isActive");

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public final NumberPath<Long> userRivalId = createNumber("userRivalId", Long.class);

    public QUserRival(String variable) {
        super(UserRival.class, forVariable(variable));
    }

    public QUserRival(Path<? extends UserRival> path) {
        super(path.getType(), path.getMetadata());
    }

    public QUserRival(PathMetadata metadata) {
        super(UserRival.class, metadata);
    }

}

