import React from 'react';
import './RoleTag.scss';

const RoleTag = ({data}) => {

    const selectColor = (type) => {
        switch (type) {
            case "ui":
                return "RoleTag-ui";
            case "ux":
                return "RoleTag-ux";
            case "front":
                return "RoleTag-front";
            case "back":
                return "RoleTag-back";
            case "pm":
                return "RoleTag-pm";
            default:
                return "RoleTag-ui";
        }
    }

    return (
        <div className={`RoleTag ${selectColor(data.type)}`}>
            <p>{data.name}</p>
        </div>
    );
}

export default RoleTag;