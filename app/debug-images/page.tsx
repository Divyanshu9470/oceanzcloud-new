import React from 'react';
import { services, industries } from '../utils/data';
import { Card } from '../components/ui/Card';
import { IndustryCard } from '../components/ui/IndustryCard';

export default function DebugImagesPage() {
    return (
        <div style={{ padding: '40px', background: '#000', color: '#fff', minHeight: '100vh' }}>
            <h1>Debug Images</h1>

            <section style={{ marginBottom: '60px' }}>
                <h2>Services Images</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                    <div><strong>Path</strong></div>
                    <div><strong>Raw Img Tag</strong></div>
                    <div><strong>Component</strong></div>

                    {services.map(service => (
                        <React.Fragment key={service.id}>
                            <div style={{ border: '1px solid #333', padding: '10px', wordBreak: 'break-all' }}>
                                {service.image}
                            </div>
                            <div style={{ border: '1px solid #333', padding: '10px' }}>
                                <img src={service.image} alt={service.title} style={{ width: '100px', height: 'auto' }} />
                            </div>
                            <div style={{ border: '1px solid #333', padding: '10px', height: '200px', position: 'relative' }}>
                                <Card image={service.image}>
                                    <div>{service.title}</div>
                                </Card>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>

            <section>
                <h2>Industries Images</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                    <div><strong>Path</strong></div>
                    <div><strong>Raw Img Tag</strong></div>
                    <div><strong>Component</strong></div>

                    {industries.map(industry => (
                        <React.Fragment key={industry.id}>
                            <div style={{ border: '1px solid #333', padding: '10px', wordBreak: 'break-all' }}>
                                {industry.bgImage}
                            </div>
                            <div style={{ border: '1px solid #333', padding: '10px' }}>
                                <img src={industry.bgImage} alt={industry.title} style={{ width: '100px', height: 'auto' }} />
                            </div>
                            <div style={{ border: '1px solid #333', padding: '10px', height: '200px', position: 'relative' }}>
                                <IndustryCard
                                    title={industry.title}
                                    description={industry.description}
                                    image={industry.bgImage}
                                />
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </div>
    );
}
