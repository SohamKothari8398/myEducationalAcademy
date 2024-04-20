"use client";
import React from 'react';

export const Spinner = ({ size = 40, color = '#1E3A8A' }) => {
    return (
        <div
            className="spinner"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                borderTopColor: `${color}`,
            }}
        ></div>
    );
};
