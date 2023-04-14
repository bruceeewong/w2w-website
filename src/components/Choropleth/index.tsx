import choropleth from './choropleth';
import us from './us.json';
import * as topojson from 'topojson-client';
import React from 'react';
import * as d3 from 'd3';
import Legend from '@/components/D3Legend';
import { useAsyncEffect } from 'ahooks';

const Choropleth: React.FC = () => {
  const [svgNode, setSvgNode] = React.useState<any>(null);

  useAsyncEffect(async () => {
    let unemployment = (await import('./unemployment.json')).default;
    // @ts-ignore
    const states = topojson.feature(us, us.objects.states);
    // @ts-ignore
    const statemap = new Map(states.features.map((d) => [d.id, d]));
    // @ts-ignore
    const counties = topojson.feature(us, us.objects.counties);
    // @ts-ignore
    const statemesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

    // @ts-ignore
    const chart = choropleth(unemployment, {
      id: (d) => d.id,
      value: (d) => d.rate,
      scale: d3.scaleQuantize,
      domain: [1, 10],
      range: d3.schemeBlues[9],
      title: (f, d) =>
        `${f.properties.name}, ${statemap.get(f.id.slice(0, 2)).properties.name}\n${d?.rate}%`,
      features: counties,
      borders: statemesh,
      width: 900,
      height: 600,
    });
    setSvgNode(chart);
  }, []);

  if (!svgNode) return null;
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '1080px' }}
    >
      <div style={{ marginLeft: 'auto', marginTop: '20px' }}>
        <Legend width={300} height={50} color={svgNode.scales.color} />
      </div>
      <svg
        style={{
          width: 950,
          height: 600,
        }}
        dangerouslySetInnerHTML={{ __html: svgNode.firstChild.outerHTML }}
      />
    </div>
  );
};

export default Choropleth;
