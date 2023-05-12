import request from './request'

const api = {
    request1: data => request(`/aaa/bbbb`, data)
}


uni.$api = api

