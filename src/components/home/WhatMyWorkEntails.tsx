import Card from '../ui/Card';

const WhatMyWorkEntails = () => {
  return (
    <div>
      <h2 className="mb-6 text-4xl font-bold tracking-widest uppercase">What My Work Entails</h2>
      <div className="flex flex-row items-center space-x-16">
        <Card
          heading="Engineering"
          content="Software systems, tools, and infrastructure built with attention to reliability, maintainability, and clear problem framing."
        />
        <Card
          heading="Research"
          content="Applied and exploratory research using public datasets, documented methods, and explicit limitations."
        />
        <Card
          heading="Women's Health"
          content="Domain focused work translating research and data into accessible, equity aware knowledge."
        />
      </div>
    </div>
  );
};

export default WhatMyWorkEntails;
