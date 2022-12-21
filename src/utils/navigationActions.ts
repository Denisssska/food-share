import {ReactComponent as Food} from "../assets/food.svg";
import {ReactComponent as Things} from "../assets/things.svg";
import {ReactComponent as Borrow} from "../assets/borrow.svg";
import {ReactComponent as Wanted} from "../assets/wanted.svg";
import {ReactComponent as FoodBanks} from "../assets/foodBanks.svg";
import {ReactComponent as Fridges} from "../assets/fridges.svg";
import {ReactComponent as Business} from "../assets/business.svg";
import {ReactComponent as Volunteer} from "../assets/volunteer.svg";
import {ReactComponent as Challenges} from "../assets/challenges.svg";
import {ReactComponent as Community} from "../assets/community.svg";
import {ReactComponent as Map} from "../assets/mapGray.svg";
import food from "../assets/food.svg";
import things from "../assets/things.svg";
import borrow from "../assets/borrow.svg";
import wanted from "../assets/wanted.svg";
import foodBanks from "../assets/foodBanks.svg";
import fridges from "../assets/fridges.svg";
import business from "../assets/business.svg";
import volunteer from "../assets/volunteer.svg";
import challenges from "../assets/challenges.svg";
import  community from "../assets/community.svg";
import map from "../assets/mapGray.svg";
import React from "react";


export const navigationActions: { Component: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string | undefined; }> }[] = [
    {Component: Food}, {Component: Community},
    {Component: Map}, {Component: Things},
    {Component: Borrow}, {Component: Wanted},
    {Component: FoodBanks}, {Component: Fridges},
    {Component: Business}, {Component: Volunteer},
    {Component: Challenges},
]
export const navigationActionsSVG =[
    {
        name: 'Food',
        src: food
    },
    {
        name: 'Things',
        src: things
    },
    {
        name: 'Borrow',
        src: borrow
    },
    {
        name: 'Wanted',
        src: wanted
    },
    {
        name: 'FoodBanks',
        src: foodBanks
    },
    {
        name: 'Fridges',
        src: fridges
    },
    {
        name: 'Business',
        src: business
    },
    {
        name: 'Volunteer',
        src: volunteer
    },
    {
        name: 'Challenges',
        src: challenges
    },
    {
        name: 'Community',
        src: community
    },
    {
        name: 'Map',
        src: map
    }
]
