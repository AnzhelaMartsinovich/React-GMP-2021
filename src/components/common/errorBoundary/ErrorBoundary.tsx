import React from 'react';

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from './ErrorBoundary.interface';
import { ERROR } from 'utils/constants';

import { ErrorBoundaryText } from './ErrorBoundary.style';

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): React.ReactElement | React.ReactNode {
    return this.state.hasError ? (
      <ErrorBoundaryText>{ERROR}</ErrorBoundaryText>
    ) : (
      this.props.children
    );
  }
}
