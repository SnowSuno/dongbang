import {Meteor} from "meteor/meteor";

import {Mongo} from "meteor/mongo";
import SimpleSchema from "simpl-schema";
import {Enum, Optional} from "/imports/custom/simpl-schema";

export enum Location {
    A_SITE = "location:a_site",
    B_SITE = "location:b_site",
}

interface SessionCreate {
    name: string;
    location?: Location;
    creatorId: string;
}

export interface Session extends SessionCreate {
    _id: string;
    members: Meteor.User[];
}

export const SessionCollection = new Mongo.Collection<SessionCreate, Session>("sessions");

SessionCollection.schema = new SimpleSchema({
    name: String,
    location: Optional(Enum(Location)),
    creatorId: String,
});

SessionCollection.attachSchema(SessionCollection.schema);

SessionCollection.addLinks({
    "members": {
        collection: Meteor.users,
        inversedBy: "session",
    }
});
