import React, { Component } from 'react'
import { APIManager } from '../../utils'
import styles from './styles'

// @material-ui/core
import Grid from '@material-ui/core/Grid'
// @material-ui/icons
import ContentCopy from '@material-ui/icons/ContentCopy'
import Store from '@material-ui/icons/Store'
import InfoOutline from '@material-ui/icons/InfoOutline'
import Warning from '@material-ui/icons/Warning'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import Accessibility from '@material-ui/icons/Accessibility'
// core components
import GridItem from '../material/Grid/GridItem.jsx'
import Danger from '../material/Typography/Danger.jsx'
import Card from '../material/Card/Card.jsx'
import CardHeader from '../material/Card/CardHeader.jsx'
import CardIcon from '../material/Card/CardIcon.jsx'
import CardFooter from '../material/Card/CardFooter.jsx'
class Home extends Component {
  constructor () {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    APIManager.get('/api/invention/list', null, (err, results) => {
      if (err) {
        console.log('ERROR: ' + err.message)
        return
      }

      results.map((inventions) => {
        inventions.categoryName = inventions.Categories.name
      })

      this.setState({
        list: results
      })
    })
  }

  callbackList (updatedData) {
    APIManager.post('/api/invention/create', updatedData, (err, results) => {
      if (err) {
        console.log('ERROR: ' + err.message)
        return
      }
      let newInventionList = Object.assign([], this.state.list)
      newInventionList.push(results)

      this.setState({
        list: newInventionList
      })
    })
  }

  render () {
    // const { classes } = this.props
    return (
      <div className='container' style={styles.home}>
        <div className='row' />
        <Grid container>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color='warning' stats icon>
                <CardIcon color='warning'>
                  <ContentCopy />
                </CardIcon>
                {/* <p className={classes.cardCategory}>Used Space</p> */}
                <p>Used Space</p>
                {/* <h3 className={classes.cardTitle}>
                  49/50 <small>GB</small>
                </h3> */}
                <h3>
                  49/50 <small>GB</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}> */}
                <div>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href='#pablo' onClick={e => e.preventDefault()}>
                    Get more space
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color='success' stats icon>
                <CardIcon color='success'>
                  <Store />
                </CardIcon>
                {/* <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>$34,245</h3> */}
                <p>Revenue</p>
                <h3>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}> */}
                <div>
                  <DateRange />
                  Last 24 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color='danger' stats icon>
                <CardIcon color='danger'>
                  <InfoOutline />
                </CardIcon>
                {/* <p className={classes.cardCategory}>Fixed Issues</p>
                <h3 className={classes.cardTitle}>75</h3> */}
                <p>Fixed Issues</p>
                <h3>75</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}> */}
                <div>
                  <LocalOffer />
                  Tracked from Github
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color='info' stats icon>
                <CardIcon color='info'>
                  <Accessibility />
                </CardIcon>
                {/* <p className={classes.cardCategory}>Followers</p>
                <h3 className={classes.cardTitle}>+245</h3> */}
                <p>Followers</p>
                <h3>+245</h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}> */}
                <div>
                  <Update />
                  Just Updated
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </Grid>
      </div>
    )
  }
}

export default Home
