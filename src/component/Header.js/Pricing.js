import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      plan: "Basic",
      price: "£49",
      features: [
        "Wireframing",
        "Visual Design",
        "5 pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.google.com",
    },
    {
      id: 2,
      plan: "Premium",
      price: "£149",
      features: [
        "Wireframing",
        "Visual Design",
        "15 pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.facebook.com",
    },
    {
      id: 3,
      plan: "Ultimate",
      price: "£349",
      features: [
        "Wireframing",
        "Visual Design",
        "Unlimited pages",
        "Free Hosting",
        "Support & Assistance",
      ],
      link: "https://www.twitter.com",
    },
  ];

  return (
    <section id="#pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricingc &amp: plans</h2>
          <div className="subtitle">check our pricing & plans</div>
        </div>
        <Row>
          {pricingData.map((data) => {
            return (
              <Col sm={4} key={data.id}>
                <div className="heading">
                  <h3>{data.plan}</h3>
                  <span className="price">{data.price}</span>
                </div>
                <div className="content">
                  <ListGroup>
                    {data.features.map((list, i) => {
                      return <ListGroup.Item key={i}>{list}</ListGroup.Item>;
                    })}
                  </ListGroup>
                </div>
                <div className="btn-holder">
                  <a href={data.link} className="btn btn-primary">
                    order now
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
