import {Mongo} from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import {User} from "/imports/db/users";
import {Enum, Optional} from "/imports/custom/simpl-schema";

export enum Location {
    A_SITE = "location:a_site",
    B_SITE = "location:b_site",
}

interface SessionIn {
    name: string;
    location?: Location;
    creatorId: string;
}

export interface SessionOut extends SessionIn {
    _id: string;
    creator: User;
    members: User[];
}

export const SessionCollection = new Mongo.Collection<SessionIn, SessionOut>("sessions");

SessionCollection.schema = new SimpleSchema({
    name: String,
    location: Optional(Enum(Location)),
    creatorId: String,
});

SessionCollection.attachSchema(SessionCollection.schema);

SessionCollection.addLinks<Meteor.User>({
    "creator": {
        type: "one",
        collection: Meteor.users,
        field: "creatorId",
    },
    "members": {
        collection: Meteor.users,
        inversedBy: "session",
    }
});

