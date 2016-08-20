import React, { PureComponent } from 'react';
import NumberPlain from './NumberPlain';
import NumberColored from './NumberColored';

export default class Number extends PureComponent {

    props: {
        value: any,
        currency: string,
        isProfit: boolean,
    };

    defaultProps: {
        isProfit: false,
    }

    render() {
        const { isProfit } = this.props;

        return isProfit ?
            <NumberColored {...this.props} /> :
            <NumberPlain {...this.props} />;
    }
}
