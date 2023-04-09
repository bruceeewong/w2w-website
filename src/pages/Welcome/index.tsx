import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React, { useEffect } from 'react';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import GeoAlbersUsa from '@/components/GeoAlbersUsa';

const Welcome: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');

  return (
    <PageContainer>
      {/*<ParentSize>{({width, height}) => (*/}
      {/*  <GeoAlbersUsa width={width} height={height}/>*/}
      {/*)}</ParentSize>*/}
      <div className={'mx-auto'}>
        <GeoAlbersUsa width={800} height={600} />
      </div>
    </PageContainer>
  );
};

export default Welcome;
