import { useMemo } from 'react'
import {
  Container,
  Col,
  Row,
  Card
} from 'react-bootstrap'
import useAxiosGet from '../hooks/useAxiosGet'
import shortid from 'shortid'

const Catalog = () => {
  const { data, error, loaded } = useAxiosGet('http://localhost:3001/products')
  
  const results = useMemo(() => {
    return data || []
  }, [data])
  
  const listItems = results.map((result) => {
    return (
      <div
        key={shortid.generate()}
      >
        {result.title}
      </div>
    )
  })

  return (
    <div className="Catalog">
      <Container fluid>
        <Row>
          <Col md={4}>
            <Card className="mt-3">
              <Card.Header>Catalog</Card.Header>
              <Card.Body>
                <Card.Text>Browse available products.</Card.Text>
                {!loaded && <Card.Text>Loading...</Card.Text>}
                {error && <Card.Text>{error}</Card.Text>}
                {loaded && <>{listItems}</>}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Catalog
