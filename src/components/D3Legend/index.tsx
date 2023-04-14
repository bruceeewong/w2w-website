import Legend from './legend';

export type D3LegendProps = {
  color: any;
  width: number;
  height: number;
};

const D3Legend = ({ color, width, height }: D3LegendProps) => {
  const legend = Legend(color, { title: 'Unemployment rate (%)' });

  return (
    <svg
      style={{
        width,
        height,
      }}
      dangerouslySetInnerHTML={{ __html: legend.outerHTML }}
    />
  );
};

export default D3Legend;
