import type { CreateUpdatePassengerDto, PassengerDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  apiName = 'Default';

  create = (input: CreateUpdatePassengerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PassengerDto>(
      {
        method: 'POST',
        url: '/api/app/passenger',
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>(
      {
        method: 'DELETE',
        url: `/api/app/passenger/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PassengerDto>(
      {
        method: 'GET',
        url: `/api/app/passenger/${id}`,
      },
      { apiName: this.apiName, ...config }
    );

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<PassengerDto>>(
      {
        method: 'GET',
        url: '/api/app/passenger',
        params: {
          sorting: input.sorting,
          skipCount: input.skipCount,
          maxResultCount: input.maxResultCount,
        },
      },
      { apiName: this.apiName, ...config }
    );

  update = (id: string, input: CreateUpdatePassengerDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PassengerDto>(
      {
        method: 'PUT',
        url: `/api/app/passenger/${id}`,
        body: input,
      },
      { apiName: this.apiName, ...config }
    );

  constructor(private restService: RestService) {}
}
