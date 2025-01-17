import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Tag } from '@douyinfe/semi-ui/';
import Space from '../index';

const stories = storiesOf('Space', module);

const divStyle = {
    width: 100,
    height: 100,
    backgroundColor:'lightblue',
    display: 'flex',
    alignItems: 'center'
}
stories.add('Space default', () => (
    <>
        <Space align='baseline'>
            <Button onClick={()=>{alert('button')}}>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
    </>
));

stories.add('Space align', () => (
    <>
        <Space align='center'>
            <span>horizontal:align-center</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <br />
        <Space align='start'>
            <span>horizontal:align-start</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <br />
        <Space align='end'>
            <span>horizontal:align-end</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <br />
        <Space align='baseline'>
            <span>horizontal:align-baseline</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <hr />
        <br />
        <Space vertical align='center'>
            <span>vertical:align-center</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <br />
        <Space vertical align='start'>
            <span>vertical:align-start</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <br />
        <Space vertical align='end'>
            <span>vertical:align-end</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
        <br />
        <Space vertical align='baseline'>
            <span>vertical:align-baseline</span>
            <Button>按钮</Button>
            <Button>按钮</Button>
            <Tag> default tag </Tag>
            <div style={divStyle}>div</div>
        </Space>
    </>
));


stories.add('Space vertical', () => (
    <>
        <Space direction='horizontal'>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space vertical>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
    </>
));

stories.add('Space spacing', () => (
    <>
        <Space spacing='loose'>
            <span>spacing-loose</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space spacing='medium'>
            <span>spacing-medium</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space spacing='tight'>
            <span>spacing-tight</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space spacing={30}>
            <span>spacing-number-30</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space spacing={[20, 20]}>
            <span>spacing-array-[20,20]</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space spacing={['medium', 'loose']}>
            <span>spacing-array-['medium','loose']</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space spacing={['medium', 20]}>
            <span>spacing-array-['medium',20]</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space wrap spacing='loose'>
            <span>spacing-loose,wrap=true</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space wrap spacing='medium'>
            <span>spacing-medium,wrap=true</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
        <Space wrap spacing='tight'>
            <span>spacing-tight,wrap=true</span>
            <Button>主要按钮</Button>
            <Button type="secondary">次要按钮</Button>
            <Button type="tertiary">第三按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="danger">危险按钮</Button>
        </Space>
        <br />
    </>
));
stories.add('Space wrap', () => (
    <>
        <Space wrap={false}>
            {new Array(30).fill(null).map((item, idex) => (
                <Button key={idex}>按钮</Button>
            ))}
        </Space>
        <br />
        <Space wrap={true}>
            {new Array(30).fill(null).map((item, idex) => (
                <Button theme='solid' type='secondary' key={idex}>按钮</Button>
            ))}
        </Space>
    </>
));


