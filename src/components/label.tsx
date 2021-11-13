import React from 'react';
import './label.css';

interface ILabelProps {
    text: string;
}

class Label extends React.PureComponent<ILabelProps> {
    constructor(props: ILabelProps) {
        super(props);
    }

    render() {
        return <span className="label">{this.props.text}</span>;
    }
}

export { Label };
