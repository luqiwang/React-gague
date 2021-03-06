/// <reference types="react" />
import React from 'react';
export interface GaugeProps {
    label: string;
    min: number;
    max: number;
    value: number;
    width: number;
    height: number;
    color: string;
    symbol: string;
    backgroundColor: string;
    topLabelStyle: React.CSSProperties;
    valueLabelStyle: React.CSSProperties;
    minMaxLabelStyle: React.CSSProperties;
}
export default class Gauge extends React.Component<GaugeProps> {
    static defaultProps: {
        label: string;
        min: number;
        max: number;
        value: number;
        width: number;
        height: number;
        color: string;
        symbol: string;
        backgroundColor: string;
        topLabelStyle: {
            textAnchor: string;
            fill: string;
            stroke: string;
            fontStyle: string;
            fontVariant: string;
            fontWeight: string;
            fontStretch: string;
            lineHeight: string;
            fillOpacity: number;
        };
        valueLabelStyle: {
            textAnchor: string;
            fill: string;
            stroke: string;
            fontStyle: string;
            fontVariant: string;
            fontWeight: string;
            fontStretch: string;
            lineHeight: string;
            fillOpacity: number;
        };
        minMaxLabelStyle: {
            textAnchor: string;
            fill: string;
            stroke: string;
            fontStyle: string;
            fontVariant: string;
            fontWeight: string;
            fontStretch: string;
            fontSize: number;
            lineHeight: string;
            fillOpacity: number;
        };
    };
    _getPathValues: (value: number) => {
        alpha: number;
        Ro: number;
        Ri: number;
        Cx: number;
        Cy: number;
        Xo: number;
        Yo: number;
        Xi: number;
        Yi: number;
    };
    _getPath: (value: number) => string;
    private uniqueFilterId;
    render(): JSX.Element;
}
