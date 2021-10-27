//core
import * as React from 'react';
import { connect } from 'react-redux';
import { Card, Image, Button, Spinner } from "react-bootstrap";
import { Toster } from '../component/alert';
import Header from '../component/header';
import calendar from '../assets/calendar.svg';
import place from '../assets/place.svg';
import user from '../assets/user.svg';
import settings from '../assets/settings.svg';
import next from '../assets/arrow_next.svg';
import { getProfile } from '../action/ProfileAction';
import { onJobMatches } from '../action/MatchesAction';
import "./styles.css";
import { acceptJob, rejectJob } from '../action/JobAction';

//Job Matches
class JobMatches extends React.Component {

    componentDidMount() {
        this.props.getProfile();
        this.props.onJobMatches();
    }

    componentDidUpdate(preProps) {

    }

    renderLoader = () => {
        if (this.props.loading) {
            return (<div className="loader-contaner"><Spinner animation="border" variant="primary" /></div>);
        }
        return null;
    }

    getJob = () => {
        if (this.props.matches && this.props.matches.data && this.props.matches.data.length > 0) {
            return this.props.matches.data[this.props.matches.data.length - 1];
        }
        return null;
    }

    getShift = (job) => {
        let shift = { startDate: '', endDate: '' };
        if (job && job.shifts.length > 0) {
            shift = job.shifts[0];
        }
        return shift;
    }

    onHandleAccept = (e) => {
        console.log('Accept')
        if (this.props.matches && this.props.matches.data && this.props.matches.data.length > 0) {
            const job = this.props.matches.data[this.props.matches.data.length - 1];
            acceptJob(job.jobId,
                response => {
                    Toster.success('Job accepted Sucessfully!');
                },
                error => {
                    Toster.error('Something went wrong');
                })
        }

    }

    onHandleReject = (e) => {
        console.log('Reject')
        if (this.props.matches && this.props.matches.data && this.props.matches.data.length > 0) {
            const job = this.props.matches.data[this.props.matches.data.length - 1];
            rejectJob(job.jobId,
                response => {
                    Toster.success('Job rejected Sucessfully!');
                },
                error => {
                    Toster.error('Something went wrong');
                })
        }
    }

    render() {
        const job = this.getJob();
        const imgURL = job && job.jobTitle ? job.jobTitle.imageUrl : 'https://picsum.photos/200';
        const shift = this.getShift(job);
        return (
            <div className="container-matches">
                <Header name={`${this.props.profile.firstName} ${this.props.profile.lastName}`} />
                <div className="card card-matches">
                    <Image src={imgURL} className="job-banner" />
                    <Card.Body>
                        <Card.Title>{job && job.jobTitle && job.jobTitle.name || ''}</Card.Title>
                        <Card.Text>{job && job.company && job.company.name || ''}</Card.Text>
                    </Card.Body>
                    <div className="container-rates">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Distance</span>
                            <span className="value-rates">{job && job.milesToTravel || ''} Miles</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Hourly Rate</span>
                            <span style={{ color: 'white' }}>$<span className="value-rates">{job && job.wagePerHourInCents || ''}</span></span>
                        </div>
                    </div>
                    <div className="container-cell">
                        <img src={calendar} className="icon" alt="logo" />
                        <div className="cell-inner">
                            <div style={{ fontSize: 16 }}>Shift Dates</div>
                            <div style={{ fontSize: 14 }}>{shift.startDate}</div>
                            <div style={{ fontSize: 14 }}>{shift.endDate}</div>
                        </div>
                    </div>

                    <div className="container-cell">
                        <img src={settings} className="icon" alt="logo" />
                        <div className="cell-inner">
                            <div style={{ fontSize: 16 }}>Location</div>
                            <div style={{ fontSize: 14 }}>{job && job.company && job.company.address && job.company.address.formattedAddress || ''}</div>
                            <div style={{ fontSize: 14 }}>{job && job.milesToTravel || ''} Miles from your location</div>
                        </div>
                    </div>
                    <div className="container-cell">
                        <img src={place} className="icon" alt="logo" />
                        <div className="cell-inner">
                            <div style={{ fontSize: 16 }}>Requirements</div>
                            {job && job.requirements && job.requirements.map(value => <div key={value} style={{ fontSize: 14 }}>{value})</div>)}
                        </div>
                        <img src={next} className="icon" alt="logo" />
                    </div>

                    <div className="container-cell">
                        <img src={user} className="icon" alt="logo" />
                        <div className="cell-inner">
                            <div style={{ fontSize: 16 }}>Report To</div>
                            <div style={{ fontSize: 14 }}>{job && job.reportTo && job.reportTo.name || ''}</div>
                        </div>
                    </div>
                    <Card.Footer className="footer">
                        <Button variant="outline-secondary"
                            size="lg" className="button"
                            onClick={this.onHandleReject}
                        >No Thanks</Button>
                        <Button variant="dark" size="lg"
                            className="button"
                            onClick={this.onHandleAccept}
                        >I'll Take it</Button>
                    </Card.Footer>
                </div>
            </div>
        );
    }
}



const mapStateToProps = ({ profile, matches }) => {
    const { data, message, loading } = profile;
    return { profile: data, message, loading, matches };
};

export default connect(mapStateToProps, { getProfile, onJobMatches })(JobMatches);





