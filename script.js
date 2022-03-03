import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {

  stages: [

    { duration: '1m', target: 1000 }, // simulate ramp-up of traffic from 1 to 100 users over 5 minutes.

    { duration: '2m', target: 1000 }, // stay at 100 users for 10 minutes

    { duration: '1m', target: 0 }, // ramp-down to 0 users

  ],

  thresholds: {

    'http_req_duration': ['p(99)<1500'], // 99% of requests must complete below 15s
    'http_req_failed': ['rate<0.01'], // http errors should be less than 1%

  },

};

export default function () {
  const url = 'http://localhost:5002/v1/accounts';

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'PSU-ID': '10106000250',
      'X-Request-ID': '6282d52a-f459-4c4f-ac7c-3d4f4a9efb63',
      'force-invalidate-cache': 'true',
      'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik5VUTVOakF4TWpoRE1EbEROVVF3UVRZNU9FRkZORFUwTlVJeU5qWkdOa1F4UlVFMU9VUTRNdyJ9.eyJodHRwczovL3NwdmFwaS5uby90cHAiOiJzcHYiLCJpc3MiOiJodHRwczovL3NwdmRldmFwaS5ldS5hdXRoMC5jb20vIiwic3ViIjoiR1c5bHZ5cFdPTG9oNDUzZVE5bHU5OHU2cWxpM3pQaVNAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbW9jay5zcHZkZXZhcGkubm8iLCJpYXQiOjE2NDYzMDkzOTIsImV4cCI6MTY0NjM5NTc5MiwiYXpwIjoiR1c5bHZ5cFdPTG9oNDUzZVE5bHU5OHU2cWxpM3pQaVMiLCJzY29wZSI6ImV4YW1wbGVzOmZ1bGwgaW52b2ljZTpmdWxsIGFjY291bnRzUHNkMjpmdWxsIHBheW1lbnQ6ZnVsbCBzZWN1cml0eW9iamVjdC1pc3N1ZXI6and0IGRlYnQtcmVnaXN0cnk6ZnVsbCBjb3JyZXNwb25kZW5jZS5kb2N1bWVudHM6cmVhZCBhY2NvdW50OmZ1bGwgYWNjb3VudC50cmFuc2FjdGlvbjpyZWFkIHBhcnRuZXItcHJvZmlsZXM6cmVhZCBsb2FuOmZ1bGwgcGF5bWVudC1hZ3JlZW1lbnRzOmZ1bGwgYWx0aW5uLWNvbnNlbnQ6ZnVsbCBvY3I6cmVhZCBwZXJzb24taWRlbnRpZmljYXRpb246ZnVsbCBwZXJzb24taWRlbnRpZmljYXRpb246cmVhZCBzaWduZWRkb2N1bWVudHNhcmNoaXZlOmZ1bGwgcGF5bWVudC1wc2QyOmZ1bGwgY2FyZDpmdWxsIGthcjpyZWFkIGRvY3M6cmVhZCBuYXRpb25hbC1yZWdpc3RyeTpmdWxsIG9uYm9hcmRpbmc6cmVhZCBvbmJvYXJkaW5nOmZ1bGwgYWNjb3VudC1wc2QyOmZ1bGwgY29uZmlybWF0aW9uLW9mLWZ1bmRzLXBzZDI6cmVhZCBsb2FuOmludGVybmFsLXN5c3RlbXMgY3VzdG9tZXItbWFuZGF0ZTpmdWxsIGFncmVlbWVudDpmdWxsIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.wAcIgggam_kuYkV1jJ0xy26i5f3Wqi4z1-LO6RWdpBT7CykMf2_03isliS7DtMUDtHZtYOfd69EHm6KWABfoS6V_9VQZI0hhvAAlGIuMCirh7UEPk_jFwkF-vakLPXSuoxt6XD6DYNd04wyEzG9EFpVukENhMbcaySX19Wl2bj-8X9VggchhBlD2mohwI7wTkpIy7ywM2P1rwD37OshBwv4dq1OcjXptz-ikOAJ7_escrCWGWcO1L2c3Q2pL_fx6KYhII83OsTYc3ijdizCTZxA7jeTI9_6inS-OminKQFgY7E2tWl66ARDnmpCJrO_PShnbofsbdqqT64l0rWDLKA'
    },
  };

  var res = http.get(url, params);

  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}